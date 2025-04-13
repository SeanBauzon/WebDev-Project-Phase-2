export async function GET() {
    const user = {
      name: "Bob Dylan",
      email: "bobdylan@sait.com",
      bio: "Hi i am a student at sait",
      image: ""
    };
  
    return Response.json(user);
  }
  