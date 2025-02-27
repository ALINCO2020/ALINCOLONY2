<script lang="ts">
    export let type: "prev" | "next";
    export let href: string;
</script>

{#if type === "prev"}
    <a {href} aria-label="previous page" class="pagenation-a">
        <span class="duration-150 group-hover:text-teal-500"> Prev </span>
    </a>
{:else if type === "next"}
    <a {href} aria-label="next page" class="pagenation-a">
        <span class="duration-150 group-hover:text-teal-500"> Next </span>
    </a>
{/if}

<style>
    .pagenation-a {
        text-decoration: none;
        color: #43454b;
    }
</style>
