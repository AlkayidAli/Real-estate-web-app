<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let { location, status = $bindable() } = $props();

  async function sendPostRequest() {
    try {
      console.log('Sending POST request to /api...');
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location: location, status: status })
      });

      if (!response.ok) {
        throw new Error(`Failed to send POST request: ${response.status}`);
      }

      const data = await response.json();
      console.log('POST response:', data);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  async function fetchProperties() {
    try {
      const response = await fetch(`/api/properties?location=${location}&status=${status}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.status}`);
      }
      const data: Property[] = await response.json();
      console.log('Properties fetched from API:', data);
      dispatch('properties', data);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  function handleSubmit() {
    sendPostRequest();
    fetchProperties();
  }

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

  function preventOnly(event: Event) {
    event.preventDefault();
    handleSubmit();
  }
</script>
<style lang="scss">
  @use '../../styles/global.scss';

  form {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
    display: block;
  }

  input[type='text'],
  select {
    width: 100%;
    padding: 8px;
    margin: 4px 0;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

    
</style>
<form onsubmit={(event) => preventOnly(event)}>
  <label for="location">Location:</label>
  <input type="text" id="location" bind:value={location} />

  <label for="status">Status:</label>
  <select id="status" bind:value={status}>
    <option value="forSale">For Sale</option>
    <option value="forRent">For Rent</option>
  </select>

  <button type="submit">Update Listings</button>
</form>