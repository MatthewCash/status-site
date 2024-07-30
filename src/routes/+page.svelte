<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCircle } from '@fortawesome/free-solid-svg-icons';
    import { invalidateAll } from '$app/navigation';
    import { onMount } from 'svelte';

    import Section from '../components/Section.svelte';
    import Footer from '../components/Footer.svelte';

    // Auto refresh
    onMount(() => setInterval(invalidateAll, 30000));

    $: getStateColor = () =>
        ({
            Healthy: 'green',
            Unhealthy: 'yellow',
            Offline: 'red'
        })[data.status.overall_state];

    export let data;
</script>

<svelte:head>
    <title>Infra Status – {data.status.overall_state}</title>
    <meta name="description" content="Infrastructure Status" />
    <link rel="icon" href="/img/heart-{getStateColor()}.svg" />
</svelte:head>

<section>
    <h1>
        <i class="pulse"><Fa color={getStateColor()} icon={faCircle} /></i>
        <div>
            <span>Infrastructure Status</span>
            <hr />
        </div>
    </h1>
    <Section items={data.status.items} />
    <div id="footer"><Footer updatedTime={data.status.time} /></div>
</section>

<style>
    section {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
    }
    h1 {
        display: flex;
        align-items: center;
        margin: 2rem auto;
        font-size: 2rem;
        text-align: center;
        & > i {
            font-size: 3rem;
            margin-right: 1.5rem;
        }
        & hr {
            margin-bottom: 0.5rem;
        }
    }
    #footer {
        margin: 2rem auto 0 auto;
        max-width: 650px;
        width: 100%;
    }
    .pulse {
        animation: pulse 0.75s infinite ease-in alternate;
    }

    @keyframes pulse {
        0% {
            filter: brightness(1);
        }
        100% {
            filter: brightness(0.5);
        }
    }
</style>
