import axios from 'axios';

/* Axios Service that deals with Project Requests */

class ProjectsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL,
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // GET Illustrations
  getAllIllustrations = () => {
    return this.api.get('/api/illustration/');
  };

  // POST Illustrations
  // Upload
  uploadImage = (file) => {
    return api.post("/api/illustration/upload", file)
      .then(res => res.data)
      .catch(errorHandler);
  };

  createIllustration = (requestBody) => {
    return this.api.post('/api/illustration', requestBody);
  };



  getUser = () => {
    return this.api.get("/api/user-profile/:id");
  }; 

  /* POST /api/projects
  createProject = requestBody => {
    return this.api.post('/api/projects', requestBody);
  };

  // GET /api/projects
  getAllProjects = () => {
    return this.api.get('/api/projects');
  };

  // GET /api/projects/:id
  getProject = id => {
    return this.api.get(`/api/projects/${id}`);
  };

  // PUT /api/projects/:id
  updateProject = (id, requestBody) => {
    return this.api.put(`/api/projects/${id}`, requestBody);
  };

  // DELETE /api/projects/:id
  deleteProject = id => {
    return this.api.delete(`/api/projects/${id}`);
  };
  */

}

// Create one instance object
const projectsService = new ProjectsService();

export default projectsService;