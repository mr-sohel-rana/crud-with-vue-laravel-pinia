 <template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">
      Here all student data show
    </h1>

    <ul v-if="posts.length" class="space-y-4">
      <li
        v-for="student in posts"
        :key="student.id"
        class="p-4 border border-gray-200 rounded-md hover:shadow-lg transition"
      >
        <p class="text-lg font-semibold text-gray-900">{{ student.name }}</p>
        <p class="text-gray-700">Department: {{ student.department }}</p>
        <p class="text-gray-600">Roll: {{ student.roll }}</p>

        <button
          @click="() => handleDelete(student.id)"
          class="text-red-600 hover:text-red-800"
        >
          Delete
        </button>

        <button
          @click="() => editStudent(student.id)"
          class="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Edit
        </button>
      </li>
    </ul>

    <p v-else class="text-center text-gray-500 italic">
      No student data available.
    </p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCrudStore } from '../components/composition/store/CrudStore';

const router = useRouter();
const crudStore = useCrudStore();

const posts = computed(() => crudStore.posts);

const editStudent = (id) => {
  router.push(`/edit/${id}`);
};

const handleDelete = async (id) => {
  if (confirm("Are you sure you want to delete this student?")) {
    await crudStore.deleteItem(id);
  }
};

onMounted(async () => {
  try {
    await crudStore.fetchData();
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
});
</script>
