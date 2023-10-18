import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const civTheme: ThemeDefinition = {
    colors: {

    }
};

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'civTheme',
            themes: {
                civTheme,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify);
})
