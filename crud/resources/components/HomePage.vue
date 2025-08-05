 <template>
  <div class="min-h-screen bg-black flex items-center justify-center">
    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded shadow-md w-80">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold mb-1">Name:</label>
        <input v-model="form.name" id="name" type="text" class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label for="dept" class="block text-gray-700 font-semibold mb-1">Department:</label>
        <input v-model="form.department" id="dept" type="text" class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label for="roll" class="block text-gray-700 font-semibold mb-1">Roll:</label>
        <input v-model="form.roll" id="roll" type="number" class="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCrudStore } from './composition/store/CrudStore';

const router = useRouter();
const CrudStore = useCrudStore();


const form = reactive({
    name: "",
    department: "",
    roll: ""
});
async function handleSubmit() {
    try {
        await CrudStore.addItem({ ...form })
    router.push('/students')
    } catch (e)
    {
    console.log(e)
}

}
</script>

