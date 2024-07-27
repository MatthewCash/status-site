<script lang="ts">
    import Fa from 'svelte-fa';
    import { faClock } from '@fortawesome/free-solid-svg-icons';
    import { onMount } from 'svelte';

    // Update relative time every minute
    onMount(() => setInterval(() => (currentTime = Date.now() / 1000), 60000));

    export let updatedTime: number;
    let currentTime = Date.now() / 1000;

    $: getAbsoluteDateString = () =>
        new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
            timeStyle: 'long'
        }).format(new Date(updatedTime * 1000));

    // based on function by @madsstoumann
    $: getRelativeDateString = () => {
        const diff = currentTime - updatedTime;
        const minutes = Math.ceil(diff / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        if (days > 0) {
            return rtf.format(0 - days, 'day');
        } else if (hours > 0) {
            return rtf.format(0 - hours, 'hour');
        } else {
            return rtf.format(0 - minutes, 'minute');
        }
    };
</script>

<section>
    <footer>
        <Fa icon={faClock} /><span
            >Last updated {getRelativeDateString()} – {getAbsoluteDateString()}</span
        >
    </footer>
</section>

<style>
    footer {
        padding: 1rem;
        background-color: #404040;
        border-radius: 0.5rem;
    }
    span {
        margin-left: 0.5rem;
    }
</style>
