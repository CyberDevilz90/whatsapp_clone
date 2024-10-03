<script setup>
import CustomInput from "@/components/interface/CustomInput.vue";
import CustomButton from "@/components/interface/CustomButton.vue";
import { ref } from "vue";
import { account } from "@/api";
import { useRouter } from "vue-router";

const email = ref();
const password = ref();

const router = useRouter()

async function register() {
  if (!email.value || !password.value) return;
  console.log("Email: " + email.value, "Password: " + password.value);

  try {
    // Mendaftarkan akun baru
    await account.create("unique()", email.value, password.value);
    // Membuat sesi setelah registrasi
    await account.createEmailPasswordSession(email.value, password.value);
    console.log('User registered and session created successfully');
    router.push({name: "Home"})
  } catch (error) {
    console.error('Error during registration or session creation:', error);
  }
}

</script>
<template>
   <section
      class="flex flex-col items-center justify-center w-full min-h-screen"
   >
      <div class="flex flex-col items-center w-80">
         <img />
         <h1 class="mt-2 text-3xl font-bold">Create new account</h1>
         <p>
            Or
            <span class="text-green-500">
               <router-link to="/auth/login">
                  Login to your account
               </router-link>
            </span>
         </p>

         <CustomInput
            type="text"
            label="Email"
            placeholder="email@email.com"
            class="w-full mt-10"
            v-model="email"
         />
         <CustomInput
            type="password"
            label="Password"
            placeholder="password"
            class="w-full mt-10"
            v-model="password"
         />
         <CustomButton text="Register" class="w-full mt-10" @click="register" />
      </div>
   </section>
</template>
