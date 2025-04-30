<script lang="ts">

</script>

<style lang="scss">
  .info-container {
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 2px solid #007bff;
    border-radius: 12px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 70%;
    max-width: 1200px;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: left;
    border: transparent;
    border-radius: 8px;
    background-color: #e9f7fc;
    padding: 20px;
    width: 60%;
  }

  .info h2 {
    margin-bottom: 15px;
    font-size: 2rem;
    color: #007bff;
    font-weight: bold;
  }

  .info p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333;
  }

  .info span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }

  .links-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 30%;
  }

  .link {
    text-decoration: none;
    color: white;
    background-color: #007bff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }
</style>

<div class="info-container">
  <div class="info">
    <h2>Alio's Real Estate</h2>
    <p>
      <span>W</span>elcome to my website! This platform allows you to search for properties across the USA. You can filter by location and status. We provide detailed pricing information and high-quality images of the properties.
    </p>
  </div>

  <div class="links-container">
    <a href="../properties" class="link">
      Start Searching!
    </a>
  </div>
</div>