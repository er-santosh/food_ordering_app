<script setup>
import { useStore } from "vuex";
import { useForm } from "@inertiajs/inertia-vue3";
import { mdiAccount, mdiAsterisk } from "@mdi/js";

const props = defineProps({
  errors: Object,
});

const form = useForm({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  terms: false,
});

const submit = () => {
  form.post(route("register"), {
    onFinish: () => form.reset("password", "password_confirmation"),
  });
};

const store = useStore();

store.dispatch("fullScreenToggle", true);
</script>

<template>
  <full-screen-section v-slot="{ cardClass, cardRounded }" bg="login">
    <card-component
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <field
        label="Full name"
        :help="errors.name ?? 'Please enter your name'"
        :error="errors.name ? true : false"
      >
        <control
          v-model="form.name"
          :icon="mdiAccount"
          name="name"
          autocomplete="name"
          type="text"
        />
      </field>

      <field
        label="Email"
        :help="errors.email ?? 'Please enter your email'"
        :error="errors.email ? true : false"
      >
        <control
          v-model="form.email"
          :icon="mdiAccount"
          name="email"
          autocomplete="email"
          type="email"
        />
      </field>

      <field
        label="Password"
        :help="errors.password ?? 'Please enter your password'"
        :error="errors.password ? true : false"
      >
        <control
          v-model="form.password"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </field>
      <field
        label="Confirm Password"
        help="Please enter your password confirmation"
      >
        <control
          v-model="form.password_confirmation"
          :icon="mdiAsterisk"
          type="password"
          name="password_confirmation"
          autocomplete="current-password"
        />
      </field>

      <check-radio-picker
        v-model="form.terms"
        name="terms"
        :options="{ terms: 'I agree to the terms' }"
        :help="errors.terms ?? ''"
        :error="errors.terms ? true : false"
      />

      <divider />

      <jb-button
        type="submit"
        color="danger"
        label="Register"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      />
      <Link :href="route('login')" class="hover:text-red-500 ml-3">
        Already registered?
      </Link>
    </card-component>
  </full-screen-section>
</template>
