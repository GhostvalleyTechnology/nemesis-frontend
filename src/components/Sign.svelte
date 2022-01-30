<script lang="ts">
  import IconButton, { Icon } from '@smui/icon-button';
  import { onMount } from 'svelte'
  let container: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  onMount(() => {
    ctx = canvas.getContext('2d');
    ctx.canvas.height = container.offsetHeight;
    ctx.canvas.width = container.offsetWidth;
  });

  // last known position
  var pos = { x: 0, y: 0 };

  function setTouchPosition(e: TouchEvent) {
    setPosition(e.touches[0].clientX, e.touches[0].clientY);
  }
  function setMousePosition(e: MouseEvent) {
    setPosition(e.clientX, e.clientY)
  }

  function setPosition(x: number, y:number) {
    const rect = canvas.getBoundingClientRect();
    pos.x = x - rect.left;
    pos.y = y - rect.top;
  }

  function touchDraw(e: TouchEvent) {
    beginDrawing();
    setTouchPosition(e);
    endDrawing();
  }

  function mouseDraw(e: MouseEvent) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;
    beginDrawing();
    setMousePosition(e);
    endDrawing();
  }

  function beginDrawing() {
    ctx.beginPath(); // begin
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#005D7F';
    ctx.moveTo(pos.x, pos.y); // from
  }

  function endDrawing() {
    ctx.lineTo(pos.x, pos.y); // to
    ctx.stroke(); // draw it!
    signature = canvas.toDataURL();
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  export let signature: string = '';
</script>

<div bind:this={container} id="canvas-container">
  <IconButton on:click={() => clearCanvas()} style="float: right;">
    <Icon class="material-icons">close</Icon>
  </IconButton>
  <canvas 
    bind:this={canvas} 
    on:mousedown={e => setMousePosition(e)}
    on:mouseenter={e => setMousePosition(e)}
    on:mousemove={e => mouseDraw(e)}
    on:touchstart={e => setTouchPosition(e)}
    on:touchmove={e => touchDraw(e)}
    />
</div>
<style lang="scss">
  #canvas-container {
    width: 100%;
    height: 400px;
    padding: 50px 0px;
  }
  canvas {
    width: 100%;
    height: 400px;
    border: 3px dashed #000;
    touch-action: none;
  }
</style>