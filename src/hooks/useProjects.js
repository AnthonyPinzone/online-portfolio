import { useEffect, useState } from 'react';

const useProjects = (projectSlug = null) => {
  const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();

                if (projectSlug) {
                    const project = data.find(project => project.slug === projectSlug);
                    setProjects([project]);
                } else {
                    setProjects(data);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [projectSlug]);

  return projects;
}

export default useProjects;