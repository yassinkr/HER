const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const apiRoutes = require('./Routes/apiRoutes');
app.use('/api', apiRoutes);
const userRoutes = require("./Routes/UserRoutes");

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://owxzroqeikapsstngzoy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93eHpyb3FlaWthcHNzdG5nem95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNTcxMTgsImV4cCI6MjAyNzkzMzExOH0.S0md4gCjbZAMTC6QuF-RlhZJpVv3otTY1tg5D9beM64";

const supabase = createClient(supabaseUrl, supabaseKey);

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));