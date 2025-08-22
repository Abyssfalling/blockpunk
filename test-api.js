import fetch from 'node-fetch';

const testData = {
  clubName: "NTU AI Club",
  activityContent: "Intro to Stable Diffusion and prompt engineering workshop",
  posterStyle: "modern",
  activityTime: "2025-09-20 19:00",
  activityLocation: "Student Activity Centre Room 204",
  themeColor: "#0055FF"
};

async function testAPI() {
  try {
    console.log('Testing NTU poster generation...');
    console.log('Request data:', JSON.stringify(testData, null, 2));
    
    const response = await fetch('http://localhost:3001/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testAPI();
