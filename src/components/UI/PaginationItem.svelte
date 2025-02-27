<script lang="ts">
    export let currentPage: number;
    export let page: number;
    export let href: string;
</script>

{#if currentPage === page}
    <span>
        {page}
    </span>
{:else}
    <a {href} aria-label={`page ${page}`} class="pagenation-a">
        {page}
    </a>
{/if}

<style>
    .pagenation-a {
        text-decoration: none;
        color: #43454b;
    }
</style>
