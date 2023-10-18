<template>
    <!-- TODO: Resize and reformat this cover -->
    <VParallax src="/img/background/homepage.png" style="max-height: 1000px" class="fade-bottom">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-sm-h1 mb-4 typography-banner">CivMC</h1>

            <div>
                <VImg width="150" src="/img/logo/civmc.png"/>
            </div>

            <h2 class="text-sm-h2 mb-5 typography-banner text-center">
                Building With More Than Just Blocks
            </h2>
            <h3 class="text-sm-h3 typography-banner">IP: play.civmc.net</h3>
            <h3 class="text-sm-h3 typography-banner">Version: Java 1.18+</h3>
        </div>
    </VParallax>

    <!-- TODO: Make these cards a little nicer, maybe separate them out -->
    <section>
        <VContent>
            <VRow>
                <VCol cols="0" sm="3"/>
                <VCol class="text-right" cols="6" sm="3">
                    <VCard variant="elevated" :loading="minecraftDataPending" class="ma-4">
                        <VCardTitle>
                            <VImg src="/img/logo/minecraft.svg" height="43px"/>
                        </VCardTitle>
                        <VCardText class="text-center">Players Online:
                            {{ minecraftDataPending ? '...' : minecraftData.players.now }}
                        </VCardText>
                    </VCard>
                </VCol>
                <VCol class="text-left" cols="6" sm="3">
                    <VCard variant="elevated" :loading="discordDataPending" class="ma-4">
                        <VCardTitle>
                            <VImg src="/img/logo/discord-full.svg" height="43px"/>
                        </VCardTitle>
                        <VCardText class="text-center">Users Online:
                            {{ discordDataPending ? '...' : discordData.approximate_presence_count }}
                        </VCardText>
                    </VCard>
                </VCol>
                <VCol cols="0" sm="3"/>
            </VRow>
        </VContent>
    </section>

    <!-- TODO: Add more links here -->
    <section>
        <VContent>
            <VRow>
                <VCol cols="12">
                    <VRow justify="center" class="text-center" no-gutters>
                        <VBtn href="https://www.patreon.com/Civ_MC" target="_blank" append-icon="mdi-patreon"
                              external nuxt>
                            Support us on Patreon!
                        </VBtn>
                    </VRow>
                </VCol>
            </VRow>
        </VContent>
    </section>

    <!-- TODO: Make this description more concise, and link elsewhere -->
    <section>
        <VContent>
            <VRow>
                <VCol cols="0" sm="3"></VCol>
                <VCol cols="12" sm="6">
                    <VSheet rounded class="text-center ma-4">
                        <h2>What is CivMC?</h2>
                        <div class="text-center" style="margin: 10px">
                            <p>
                                CivMC is a geopolitical Minecraft server focused on <span class="highlight">civilization-building. </span>
                                Players form <span class="font-weight-bold">nations</span> and establish <span
                                class="font-weight-bold">governments</span>, <span class="highlight">wars</span>
                                occur, and <span class="highlight">treaties</span> are signed.
                            </p>
                            <p>
                                The server represents the current iteration of a <span class="font-weight-bold">long history</span>
                                of civilization servers.
                                Veterans of the genre play in old nations with deep lore spanning ages, while new
                                friends have a vast
                                unexplored world to discover, coexisting and helping one another to build a <span
                                class="font-weight-bold">strong community</span>.
                            </p>
                            <p>
                                The server employs several custom-made plugins to facilitate this gameplay:
                            </p>

                            <p><span class="font-weight-bold">Citadel</span> adds block reinforcement, allowing
                                players to protect their property by using resources to make blocks harder to break.
                            </p>
                            <p><span class="font-weight-bold">ExilePearl</span> enables players to imprison
                                law-breakers by killing them while holding an ender pearl. </p>
                            <p><span class="font-weight-bold">FactoryMod</span> introduces factories, requiring
                                players to pay a price for their creation but reducing the cost of tool
                                manufacturing. </p>
                            <p><span class="font-weight-bold">RealisticBiomes</span> increases the difficulty of
                                crop growth as they can only flourish in their respective biomes. </p>
                            However, crops serve as the sole source of experience on the server.
                            <p><span class="font-weight-bold">RailSwitch</span> allows the creation of expansive
                                rail networks, while <span class="highlight">Brewery</span> adds a selection of
                                alcoholic beverages with secret recipes that many players aspire to uncover.</p>
                        </div>
                    </VSheet>
                </VCol>
                <VCol cols="0" sm="3"></VCol>
            </VRow>
        </VContent>
    </section>
</template>

<script setup lang="ts">
const {
    pending: minecraftDataPending,
    data: minecraftData
} = useFetch('https://mcapi.us/server/status?ip=play.civmc.net', {
    lazy: true
})

const {
    pending: discordDataPending,
    data: discordData
} = useFetch('https://discord.com/api/v9/invites/HkD79GfmQQ?with_counts=true&with_expiration=true', {
    lazy: true
})

</script>

<style scoped>
.typography-banner {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.fade-bottom {
    --mask: linear-gradient(to bottom,
    rgba(0, 0, 0, 1) 96%,
    rgba(0, 0, 0, 0) 100%
    ) repeat-x;

    -webkit-mask: var(--mask);
    mask: var(--mask);

}
</style>