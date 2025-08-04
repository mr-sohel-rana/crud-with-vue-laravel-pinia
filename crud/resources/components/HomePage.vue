 <template>
  <div class="max-w-md mx-auto p-6 bg-white rounded shadow">
    <h2 class="text-2xl font-bold mb-4 text-red-600">Student Information</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block mb-1 font-semibold">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter your name"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>

      <div>
        <label for="department" class="block mb-1 font-semibold">Department</label>
        <input
          id="department"
          v-model="form.department"
          type="text"
          placeholder="Enter your department"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>

      <div>
        <label for="roll" class="block mb-1 font-semibold">Roll</label>
        <input
          id="roll"
          v-model.number="form.roll"
          type="number"
          placeholder="Enter your roll number"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          required
          min="1"
        />
      </div>

      <button
        type="submit"
        class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useCrudStore } from '../components/composition/store/CrudStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const crudStore = useCrudStore();

const form = reactive({
  name: '',
  department: '',
  roll: null,
});

async function handleSubmit() {
  try {
    await crudStore.addItem({ ...form });
    alert('Student added successfully!');
    router.push('/students');
  } catch (error) {
    console.error('Failed to add student:', error);
    alert('Failed to add student, please try again.');
  }
}
</script>
