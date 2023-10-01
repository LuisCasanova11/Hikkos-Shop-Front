<template>
  <div class="card">
    <Card>
      <template #title>
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
          <span class="text-xl font-bold text-900">Products</span>
          <Button icon="pi pi-check" rounded aria-label="Filter" />
        </div>
      </template>
      <template #content>
        <p>

        </p>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'
</script>
