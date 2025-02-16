import PocketBase from 'pocketbase';
import {ref} from 'vue';
import type { Project } from "@/types/project"

interface ProjectRecord extends Record<string, any> {
    id: string;
    name: string;
    description: string;
    slug?: string;
    content?: string;
    source?: string;
    icon: string;
    created: string;
    updated: string;
    start: string
}



export function useProjects() {
    const config = useRuntimeConfig()

    const pb = new PocketBase(config.public.apiBaseUrl);
    const projects = ref<Project[]>([]);
    const project = ref<Project | null>(null);

    // Fetch all posts with pagination
    async function fetchProjects(page: number = 1, perPage: number = 50) {
        try {
            const result = await pb.collection('projects').getList<ProjectRecord>(page, perPage);
            projects.value = result.items.map((item) => ({
                id: item.id,
                name: item.name,
                description: item.description,
                slug: item.slug,
                content: item.content,
                source: item.source,
                icon: item.icon,
                created: item.created,
                updated: item.updated,
                start: item.start
            }));
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    async function fetchAllProjects() {
        try {
            const results = await pb.collection('projects').getFullList<ProjectRecord>({
                sort: '-start',
            });
            projects.value = results.map((item) => ({
                id: item.id,
                name: item.name,
                description: item.description,
                slug: item.slug,
                content: item.content,
                source: item.source,
                icon: item.icon,
                created: item.created,
                updated: item.updated,
                start: item.start
            }));
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    // Fetch a single post by slug
    async function fetchProjectBySlug(slug: string) {
        try {
            project.value = await pb.collection('projects').getFirstListItem(`slug="${slug}"`);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    return { projects, project, fetchProjectBySlug, fetchAllProjects, fetchProjects };
}
