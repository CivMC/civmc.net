<template>
    <VFooter style="background: url('/img/background/bedrock.png')">
        <VRow justify="center" no-gutters>
            <VBtn
                v-for="link in links"
                :key="link.name"
                :to="link.target"
                variant="elevated"
                class="mx-2"
                rounded="xl"
                nuxt
            >{{link.name}}</VBtn>
            
            <VCol class="text-center mt-4" cols="12">
            <VBtn variant="elevated"
                class="mx-2"
                rounded="xl">
            Copyright © {{ new Date().getFullYear() }} — CivMC
            </VBtn>
                
            </VCol>
        </VRow>
    </VFooter>
</template>

<script setup lang="ts">
const links = [
    {name: 'Home', target: '/' },
//    {name: 'Terms of Service', target: '/terms-of-service' },
]
</script>
