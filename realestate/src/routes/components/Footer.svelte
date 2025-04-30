<style lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
    border-top: 1px solid #ddd;
    margin-top: 20px;
  }

  .logo img {
    height: 30px;
    cursor: pointer; 
  }

  .footer-links {
    display: flex;
    gap: 20px;
  }

  .footer-links a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: #007bff;
    }
  }
</style>

<div class="footer">
  <div class="logo">
    <a href="/">
      <img src="/img/logo.png" alt="Logo" />
    </a>
  </div>
  <nav class="footer-links">
    <a href="/about">About Us</a>
    <a href="/contact">Contact</a>
  </nav>
</div>