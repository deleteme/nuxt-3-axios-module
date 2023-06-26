<template>
  <div>
    <p>
      This enumerates a few ways to interact with axios using Vue components or server event handlers in a Nuxt 3 app.
    </p>
    <h2>Client-side axios calls</h2>
    <div class="example">
      <div class="description">
        <h4>
          &lt;OptionsApiExample&gt;
        </h4>
        <p>
          Vue 2 options API:
          An async method is defined on the component options.
        </p>
      </div>
      <OptionsApiExample />
    </div>
    <div class="example">
      <div class="description">
        <h4>
          &lt;OptionsApiSetupExample&gt;
        </h4>
        <p>
          Vue 2 options API, with setup method:
          An async function is defined in the setup method of the component options. Allows access to some of the composition API.
        </p>
      </div>
      <OptionsApiSetupExample />
    </div>
    <div class="example">
      <div class="description">
        <h4>
          &lt;CompositionApiExample&gt;
        </h4>
        <p>
          Vue 3 composition API:
          An async function is defined in &lt;script setup&gt;.
        </p>
      </div>
      <CompositionApiExample />
    </div>
    <h2>Server-side axios calls</h2>
    <div class="example">
      <div class="description">
        <h4>
          Nuxt 3 SSR: Request to internal API
        </h4>
        <p>
          A page is rendered on the server and uses axios to make a request to an API endpoint defined within the Nuxt 3 app at /server/api.
        </p>
      </div>
      <NuxtSSRExample iframeSrc="/ssr-internal" />
    </div>
    <div class="example">
      <div class="description">
        <h4>
          Nuxt 3 SSR: Request to external API
        </h4>
        <p>
          A page is rendered on the server and uses axios to make a request to an API endpoint defined at another server.
        </p>
      </div>
      <NuxtSSRExample iframeSrc="/ssr-external" />
    </div>
    <div class="example">
      <div class="description">
        <h4>
          Nuxt 3 Server API: Request to external API
        </h4>
        <p>
          A Nuxt 3 server endpoint requests an external API using axios.
        </p>
      </div>
      <ServerApiExample />
    </div>
  </div>
</template>
