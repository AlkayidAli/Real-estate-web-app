<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import PropertyForm from '../components/PropertyForm.svelte';
  import PropertyList from '../components/Propertylist.svelte';
  import PropertyDetails from '../components/PropertyDetails.svelte';

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

  let properties: Property[] = [];
  let selectedProperty: Property | null = null;
  let error: string | null = null;
  let message: string | null = null;
  let location: string = 'Houston, TX';
  let status: string = 'forSale';

  function handleProperties(event: CustomEvent<Property[]>) {
    properties = event.detail;
  }

  function showPropertyDetails(event: CustomEvent<Property>) {
    selectedProperty = event.detail; // extract the property from the event's detail
  }

  function closePropertyDetails() {
    selectedProperty = null;
  }
</script>

<style lang="scss">
  .property-details-container {
    padding: 20px;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
</style>

<Header />

<h1>Real Estate Listings</h1>

<PropertyForm location={location} status={status} on:properties={handleProperties} />


{#if error}
  <p class="error">Error: {error}</p>
{:else}
  <PropertyList {properties} on:select={showPropertyDetails} />
{/if}

{#if selectedProperty}
  <div class="property-details-container">
    <button on:click={closePropertyDetails}>Close</button>
    <PropertyDetails property={selectedProperty} on:close={() => (selectedProperty = null)} />
  </div>
{/if}

<Footer />
