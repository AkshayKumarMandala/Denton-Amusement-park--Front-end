import React, { useState, useEffect } from 'react';
import { db } from "../firebase/config"; // Import your Firebase configuration
import { ref, set } from "firebase/database"; // Import necessary Firebase functions

interface Service {
  id: string;
  name: string;
  description: string;
}

const AddService: React.FC<{ setServices: React.Dispatch<React.SetStateAction<Service[]>>, editService?: Service | null }> = ({ setServices, editService }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // If editService is provided, populate the fields with its values
  useEffect(() => {
    if (editService) {
      setName(editService.name);
      setDescription(editService.description);
    }
  }, [editService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newService = { name, description };

    try {
      // Add or update a service in Firebase
      const serviceRef = ref(db, 'services/' + (editService ? editService.id : name)); // Use service ID or name for new service
      await set(serviceRef, newService);

      // Update local state
      setServices(prevServices => {
        if (editService) {
          return prevServices.map(service => service.id === editService.id ? { ...service, ...newService } : service);
        }
        return [...prevServices, { id: name, ...newService }];
      });

      // Clear the form
      setName('');
      setDescription('');
    } catch (error) {
      console.error("Error adding/updating service: ", error);
    }
  };

  return (
    <div className="add-service">
      <h2>{editService ? 'Edit Service' : 'Add New Service'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Service Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit">{editService ? 'Update Service' : 'Add Service'}</button>
      </form>
    </div>
  );
};

export default AddService;
