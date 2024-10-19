<template>
  <main class="bg-white-100">
    <title-component title="Welcome"/>

    <accordeon-item-component title="See my diary">
      <form action="" class="w-full flex flex-col gap-y-6">
        <field-form-component link-input="name" label="name">
          <template v-slot:input>
            <input-form-component type="text"/>
          </template>
        </field-form-component>
        <field-form-component link-input="password" label="password" :need-tooltip="true">
          <template v-slot:input>
            <input-form-component type="password"/>
          </template>
        </field-form-component>
      </form>
    </accordeon-item-component>
    <!--  <accordeon-item-component title="Just consult">
      </accordeon-item-component>-->

    <router-link to="/table-contents">Just Consult</router-link>
  </main>
</template>

<script setup>
import TitleComponent from "@components/TitleComponent.vue";
import AccordeonItemComponent from "@components/accordeon/AccordeonItemComponent.vue";
import FieldFormComponent from "@components/form/FieldFormComponent.vue";
import InputFormComponent from "@components/form/InputFormComponent.vue";

</script>

<style scoped>

</style>