<script lang="ts">
    import PaginationItem from "./UI/PaginationItem.svelte";
    import PaginationPrevNext from "./UI/PaginationPrevNext.svelte";
    import type { Page } from "astro";

    // propsで'pageデータ'と'隣接するページを表示する数'を受け取る
    export let page: Page;
    export let adjacentPageNumber: number = 1; // 初期値は1
    // ページ番号の配列を作成
    const pager = [...Array(page.lastPage).keys()].map((i) => ++i);
</script>

<nav aria-label="pagination" class="pagination">
    <ul class="page-numbers">
        <!-- 前ページが存在する場合はPREVリンクを表示する -->
        {#if page.url.prev}
            {#if page.currentPage == 2}
                <li>
                    <PaginationPrevNext href="/blog" type={"prev"} />
                </li>
            {:else}
                <li>
                    <PaginationPrevNext href={page.url.prev} type={"prev"} />
                </li>
            {/if}
        {/if}
        <!-- 現在ページが「隣接ページ数 + 1」を超える場合は先頭ページと...を表示する -->
        {#if adjacentPageNumber + 1 < page.currentPage}
            <li>
                <PaginationItem
                    currentPage={page.currentPage}
                    page={1}
                    href={"/blog"}
                />
            </li>
            {#if page.currentPage != 3}
                <li class="dot">&#8230;</li>
            {/if}
        {/if}
        <!-- ページ番号の配列リストから「現在ページ +- 隣接ページ数」のページを表示する -->
        {#each pager as p (p)}
            {#if page.currentPage - adjacentPageNumber <= p && p <= page.currentPage + adjacentPageNumber}
                {#if p == 1}
                    {#if p == page.currentPage}
                        <li class="current">
                            <PaginationItem
                                currentPage={page.currentPage}
                                page={p}
                                href={"/blog/" + p}
                            />
                        </li>
                    {:else}
                        <li>
                            <PaginationItem
                                currentPage={page.currentPage}
                                page={p}
                                href={"/blog"}
                            />
                        </li>
                    {/if}
                {:else if p == page.currentPage}
                    <li class="current">
                        <PaginationItem
                            currentPage={page.currentPage}
                            page={p}
                            href={"/blog/" + p}
                        />
                    </li>
                {:else}
                    <li>
                        <PaginationItem
                            currentPage={page.currentPage}
                            page={p}
                            href={"/blog/" + p}
                        />
                    </li>
                {/if}
            {/if}
        {/each}
        <!-- 現在ページが「最終ページ - 隣接ページ数」の場合...と最終ページを表示する -->
        {#if page.currentPage < page.lastPage - adjacentPageNumber}
            {#if page.currentPage != page.lastPage - 2}
                <li class="dot">&#8230;</li>
            {/if}
            <li>
                <PaginationItem
                    currentPage={page.currentPage}
                    page={page.lastPage}
                    href={"/blog/" + page.lastPage}
                />
            </li>
        {/if}
        <!-- 次ページが存在する場合はNEXTリンクを表示する -->
        {#if page.url.next}
            <li><PaginationPrevNext href={page.url.next} type={"next"} /></li>
        {/if}
    </ul>
</nav>

<style>
    .pagination {
        padding: 2.617924em 0;
    }

    .page-numbers {
        list-style: none;
        margin: 0;
        vertical-align: middle;
        justify-content: center;
        display: flex;
    }

    .page-numbers li {
        padding: 0.3342343017em 0.875em;
        background-color: rgba(0, 0, 0, 0.042);
        margin: 0.2em;
    }

    .dot {
        background-color: #f5f5f3 !important;
    }

    .current {
        background-color: #c6beb9 !important;
    }
</style>
