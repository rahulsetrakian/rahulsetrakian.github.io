import fs from 'node:fs';
import { exec } from 'node:child_process';
import path from 'node:path';
import type { Plugin } from 'vite';

export function gitCommitterPlugin(): Plugin {
    return {
        name: 'vite-plugin-git-committer',
        configureServer(server) {
            server.watcher.on('change', (file) => {
                // Only trigger when commit.json is modified
                if (file.endsWith(path.normalize('src/data/commit.json'))) {
                    try {
                        console.log(`\n[Git Committer] Detected change in commit.json!`);

                        // Wait briefly to ensure file write is complete
                        setTimeout(() => {
                            let msg = 'Auto-commit from CMS';
                            try {
                                const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
                                if (data.message) msg = data.message;
                            } catch (e) {
                                console.warn('[Git Committer] Could not parse JSON, using default message.');
                            }

                            // Escape quotes to prevent injection
                            const escapedMsg = msg.replace(/"/g, '\\"');

                            console.log(`[Git Committer] Committing with message: "${msg}"`);

                            // Execute git commands
                            exec(`git add . && git commit -m "${escapedMsg}" && git push`, (err, stdout, stderr) => {
                                if (err) {
                                    console.error('[Git Committer] Git commit/push error:', stderr || err.message);
                                } else {
                                    console.log('[Git Committer] Success! Pushed changes to GitHub.');
                                    console.log(stdout);
                                }
                            });
                        }, 500);
                    } catch (e: any) {
                        console.error('[Git Committer] Unexpected error:', e.message);
                    }
                }
            });
        }
    };
}
