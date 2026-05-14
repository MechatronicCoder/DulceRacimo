// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'DulceRacimo';
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? 'TU_USUARIO';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? `https://${repositoryOwner}.github.io` : undefined,
	base: isGitHubPages ? `/${repositoryName}` : '/',
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
