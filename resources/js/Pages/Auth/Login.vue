<script setup>
import { useStore } from "vuex";
import { useForm } from "@inertiajs/inertia-vue3";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
const props = defineProps({
  errors: Object,
});

const form = useForm({
  email: "",
  password: "",
  remember: [],
});

const store = useStore();

store.dispatch("fullScreenToggle", true);

const submit = () => {
  form
    .transform((data) => ({
      ...data,
      remember: form.remember && form.remember.length ? "on" : "",
    }))
    .post(route("login"), {
      onFinish: () => form.reset("password"),
    });
};
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
        :hasInlineLabel="true"
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

        <template #inlineLabel>
          <Link
            :href="route('password.email')"
            class="hover:text-red-500 font-normal"
          >
            Forgot password?
          </Link>
        </template>
      </field>

      <check-radio-picker
        v-model="form.remember"
        name="remember"
        :options="{ remember: 'Remember' }"
      />

      <divider />

      <jb-button
        type="submit"
        color="danger"
        label="Login"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      />
      <Link :href="route('register')" class="hover:text-red-500 ml-3">
        Not a user yet?
      </Link>
    </card-component>
  </full-screen-section>
</template>
