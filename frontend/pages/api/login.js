// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const API_GATEWAY = "192.168.1.230:3000";

export async function login ({ email, password }) {
  try {
    const res = await axios.post(API_GATEWAY+'/alunos/login', {
      email,
      password,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
