 <template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
    <h2 class="text-2xl font-bold mb-4 text-center text-blue-600">Edit Student</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block mb-1 font-semibold">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="department" class="block mb-1 font-semibold">Department</label>
        <input
          id="department"
          v-model="form.department"
          type="text"
          placeholder="Enter department"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="roll" class="block mb-1 font-semibold">Roll</label>
        <input
          id="roll"
          v-model.number="form.roll"
          type="number"
          placeholder="Enter roll number"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Update Student
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCrudStore } from '../components/composition/store/CrudStore';

const route = useRoute();
const router = useRouter();
const crudStore = useCrudStore();

const id = route.params.id;

const form = reactive({
  name: '',
  department: '',
  roll: null
});

const fetchStudent = async () => {
  try {
    await crudStore.singleData(id);
    const student = crudStore.student;

    if (student) {
      form.name = student.name || '';
      form.department = student.department || '';
      form.roll = student.roll || null;
    } else {
      alert('Student not found!');
      router.push('/students');
    }
  } catch (error) {
    console.error('Failed to fetch student:', error);
  }
};

const handleSubmit = async () => {
  try {
    await crudStore.updateItem(id, { ...form });
    alert('Student updated successfully!');
    router.push('/students');
  } catch (error) {
    console.error('Failed to update student:', error);
    alert('Update failed!');
  }
};

onMounted(fetchStudent);
</script>
