<script>
    import { spring, tweened } from "svelte/motion";

    export let percent = 0;
    export let size = 200;
    export let title = '';
    export let titleClass = '';
    export let containerStyle = '';
    const store = tweened(0, {duration: 500});
    // const store = spring(0, { stiffness: 0.2, damping: 0.4 });
    const bgColor = "#fbba00";
    const fgColor = "#2e7d32";

    $: store.set(percent);
    $: viewBox = `0 -5 ${size+5} ${size+10}`;
    $: radius = size / 2;
    $: halfCircumference = Math.PI * radius;
    $: pieSize = halfCircumference * ($store / 100);
    $: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
</script>

<div class="container" style="--width: {size}; {containerStyle}">
    <div class="title {titleClass}">{title}</div>
    <svg width={size+5} height={size+5} {viewBox}>
        <circle r={radius} cx={radius} cy={radius} stroke="black" stroke-width="5" fill="none" />
        <circle r={radius} cx={radius} cy={radius} fill={bgColor} />
        <circle
            r={radius / 2}
            cx={radius}
            cy={radius}
            fill={bgColor}
            stroke={fgColor}
            stroke-width={radius}
            stroke-dasharray={dashArray}
        />
    </svg>
</div>

<style lang="scss">
    .container {
        width: var(--width);
    }
    .title {
        text-align: center;
        padding-bottom: 20px;
    }
</style>