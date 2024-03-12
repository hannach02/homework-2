function CreateForm(){
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const name = event.target.elements.name.value;
        const age = event.target.elements.age.value;
        const email = event.target.elements.email.value;
    
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Email:', email);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Your name:</label>
          <input type="text" name="name" />
          <br />
    
          <label>Your age:</label>
          <input type="text" name="age" />
          <br />
    
          <label>Your email:</label>
          <input type="email" name="email" />
          <br />
    
          <button type="submit">Submit</button>
        </form>
      );
    }
    export default CreateForm