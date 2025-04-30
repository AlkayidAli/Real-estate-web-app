<script lang="ts">
  import { goto } from '$app/navigation';
  import { createEventDispatcher } from 'svelte';

  export let properties: Property[];

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

  function navigateToDetails(propertyId: string) {
    goto(`/property/${propertyId}`);
  }

  function selectProperty(property: Property) {
    dispatch('select', property);
  }
</script>

<style lang="scss">
  .property-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .property-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
  }

  .property-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .property-card-content {
    padding: 15px;
  }

  .property-card h3 {
    margin: 0 0 10px;
    font-size: 1.2rem;
    color: #333;
  }

  .property-card p {
    margin: 5px 0;
    color: #555;
  }
</style>

{#if properties.length === 0}
  <p>Loading properties...</p>
{:else}
  <div class="property-list">
    {#each properties as property}
    <div 
      class="property-card" 
      role="button" 
      tabindex="0" 
      on:click={() => selectProperty(property)} 
      on:keydown={(e) => e.key === 'Enter' && selectProperty(property)}
    >
        {#if property.photo_1}
          <img src={property.photo_1} alt={`Photo of ${property.street_address}`} />
        {/if}
        <div class="property-card-content">
          <h3>{property.street_address}</h3>
          <p>Price: ${property.price}</p>
          <p>{property.city}, {property.state}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}