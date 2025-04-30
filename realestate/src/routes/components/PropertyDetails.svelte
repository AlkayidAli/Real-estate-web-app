<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let property: Property;

  interface Property {
    id: string;
    city: string;
    state: string;
    street_address: string;
    price: number;
    rent_price: number;
    photo_1: string | null;
    photo_2: string | null;
    photo_3?: string | null;
    photo_4?: string | null;
  }

  const dispatch = createEventDispatcher();

  function closeDetails() {
    dispatch('close'); 
  }
</script>

<style lang="scss">
  .property-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    max-width: fit-content;
    width: 90%;
    padding: 20px;
    z-index: 1000;
  }

  .property-details-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      width: 300px;
      height: 300px;
      border-radius: 8px;
      margin-right: 20px;
    }

    .property-writen-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }

    .property-writen-details p {
      border: transparent;
      border-radius: 8px;
      background-color: #7dcde0;
      padding: 7px 10px;
      margin: 0;
    }
  }

  .property-img-container {
    display: flex;
    gap: 10px;

    img {
      width: calc(50% - 5px);
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .close-button {
    background: #ff5c5c;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    float: right;
    margin-top: -10px;
    margin-right: -10px;
    transition: background-color 0.2s ease;

    &:hover {
      background: #e04e4e;
    }
  }
</style>

<div class="property-container">
  <button class="close-button" on:click={closeDetails}>X</button>

  <div class="property-details-header">
    {#if property.photo_1}
      <img src={property.photo_1} alt={`Photo of ${property.street_address}`} />
    {/if}

    <div class="property-writen-details">
      <h2>{property.street_address}</h2>
      <p>Price: ${property.price}</p>
      <p>Rent Price: ${property.rent_price}</p>
      <p>{property.city}, {property.state}</p>
      <p>Property ID: {property.id}</p>
    </div>
  </div>

  <div class="property-img-container">
    {#if property.photo_2}
      <img src={property.photo_2} alt={`Photo of ${property.street_address}`} />
    {/if}

    {#if property.photo_3}
      <img src={property.photo_3} alt={`Photo of ${property.street_address}`} />
    {/if}

    {#if property.photo_4}
      <img src={property.photo_4} alt={`Photo of ${property.street_address}`} />
    {/if}
  </div>
</div>