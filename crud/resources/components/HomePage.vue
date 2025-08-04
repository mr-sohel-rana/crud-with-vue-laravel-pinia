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
          v-model="form.roll"
          type="number"
          placeholder="Enter your roll number"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Submit
      </button>
    </form>

    <!-- Show the posts -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">All Students</h3>
      <ul v-if="posts.length">
        <li v-for="(post, index) in posts" :key="post.id" class="border-b py-2">
          <strong>{{ post.name }}</strong> - {{ post.department }} (Roll: {{ post.roll }})
        </li>
      </ul>
      <p v-else>No students found.</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useCrudStore } from '../js/store/CrudStore';

const form = reactive({
  name: '',
  department: '',
  roll: ''
});

const crudStore = useCrudStore();
const { addItem, fetchItem, posts } = crudStore;

// Fetch existing posts on page load
onMounted(() => {
  fetchItem();
});

function handleSubmit() {
  if (form.name && form.department && form.roll) {
    addItem({ ...form });
    form.name = '';
    form.department = '';
    form.roll = '';
  }
}
</script>
