import 'dotenv/config';
import { fetchContributionData } from '../src/fetcher';
import { renderGraph } from '../src/renderer';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function updateReadme() {
    try {
        const username = process.env.GITHUB_USERNAME!;
        if (!username) throw new Error('GITHUB_USERNAME not set in .env');

        // Fetch contribution data
        const contributionData = await fetchContributionData(username);

        // Render the contribution graph
        const graphMarkdown = renderGraph(contributionData);

        // Define the path to the README file
        const readmePath = join(process.cwd(), 'README.md');

        // Read the existing README content
        const existingReadme = await readFile(readmePath, 'utf-8');

        // Update the README content with the new graph
        const updatedReadme = existingReadme.replace(
            /<!-- CONTRIBUTION_GRAPH_START -->[\s\S]*<!-- CONTRIBUTION_GRAPH_END -->/,
            `<!-- CONTRIBUTION_GRAPH_START -->\n${graphMarkdown}\n<!-- CONTRIBUTION_GRAPH_END -->`
        );

        await writeFile(readmePath, updatedReadme, 'utf-8');
        console.log('✅ README file updated successfully with the contribution graph.');
    } catch (error) {
        console.error('❌ Error updating README file:', error);
    }
}

updateReadme();
