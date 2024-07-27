<script lang="ts">
    import type { Item } from '../routes/+page';
    import Section from './Section.svelte';
    import Service from './Service.svelte';

    export let items: Item[];
</script>

<section>
    {#each items as item}
        {#if item.Service}
            <Service
                name={item.Service.name}
                desc={item.Service.desc}
                status={item.Service.status}
            />
        {:else if item.SubSection}
            <div class="subsection-header">
                <h2>{item.SubSection.name}</h2>
                <hr />
            </div>
            <div class="subsection">
                <Section items={item.SubSection.items} />
            </div>
        {/if}
    {/each}
</section>

<style>
    section {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }
    .subsection-header {
        display: flex;
        & > hr {
            width: 100%;
            margin: auto 1rem;
        }
    }
    .subsection {
        margin-left: 1rem;
    }
</style>
