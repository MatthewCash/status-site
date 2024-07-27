<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCircle } from '@fortawesome/free-solid-svg-icons';

    import type { Status } from '../routes/+page';

    $: getStateColor = () =>
        ({
            Healthy: 'green',
            Unhealthy: 'yellow',
            Offline: 'red'
        })[status.state];

    export let name: string;
    export let desc: string;
    export let status: Status;
</script>

<section>
    <div class="title">
        <Fa color={getStateColor()} icon={faCircle} /><span class="name"
            >{name}<span class="desc">&nbsp;– {desc}</span>
        </span>
    </div>
    <div class="status-text">{status.text}</div>
</section>

<style>
    section {
        padding: 1rem;
        background-color: #404040;
        border-radius: 0.5rem;
        margin: 1rem auto;
        padding: 2rem;
    }
    .title {
        font-size: 1.4rem;
    }
    .name {
        margin-left: 0.5rem;
    }
    .desc {
        font-size: 1.2rem;
    }
    .status-text {
        margin-top: 1rem;
        font-size: 1rem;
        font-family: monospace;
    }
</style>
