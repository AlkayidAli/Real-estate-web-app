<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
  }

  .logo img {
    height: 40px;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: #007bff;
    }
  }
</style>

<div class="header">
  <div class="logo">
    <a href="/">
      <img src="/img/logo.png" alt="Logo" />
    </a>
  </div>
  <nav class="nav-links">
    <a href="/">Home</a>
    <a href="/properties">Properties</a>
  </nav>
</div>