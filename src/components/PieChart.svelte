<script>
    import { spring, tweened } from "svelte/motion";

    export let percent = 0;
    export let size = 200;
    const store = tweened(0, {duration: 500});
    // const store = spring(0, { stiffness: 0.2, damping: 0.4 });
    const bgColor = "#fbba00";
    const fgColor = "#2e7d32";

    $: store.set(percent);
    $: viewBox = `0 0 ${size} ${size}`;
    $: radius = size / 2;
    $: halfCircumference = Math.PI * radius;
    $: pieSize = halfCircumference * ($store / 100);
    $: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
</script>

<svg width={size} height={size} {viewBox}>
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
