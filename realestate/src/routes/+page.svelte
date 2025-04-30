<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Info from "./components/Info.svelte";
</script>

<style lang="scss">
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
  }
</style>

<div class="page-container">
  <Header />

  <div class="content">
    <Info />
  </div>

  <Footer />
</div>