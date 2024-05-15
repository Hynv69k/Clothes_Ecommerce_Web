import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { addCategory } from '../api/apiService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
  },
  txtInput: {
    width: '98%',
    margin: '10px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Category() {
  const classes = useStyles();
  const [checkAdd, setCheckAdd] = useState(false);
  const [name, setName] = useState('');
  const [slugCategory, setslugCategory] = useState('');
  const navigate = useNavigate();

  const handleChangeSlugCategory = (event) => {
    setslugCategory(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };


  const handleAddCategory = (event) => {
    event.preventDefault();

    if (name !== '' > 0 && slugCategory !== '' > 0) {
      const category = {
        name: name,
        slugCategory: slugCategory,
        products:[]
      };

      addCategory('Category', category).then((item) => {
        if (item.data === 1) {
          setCheckAdd(true);
        } else {
            alert('Bạn chưa nhập đủ thông tin!');
        }
      });
    }else{
        alert('Bạn chưa nhập đủ thông tin!');
    }
  };

  useEffect(() => {
    if (checkAdd) {
      navigate('/');
    }
  }, [checkAdd]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.name} variant="h4">
              Add Category
            </Typography>
            <Grid item container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subname1">
                  Name
                </Typography>
                <TextField
                  id="Name"
                  onChange={handleChangeName}
                  name="Name"
                  label="Name"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subname1">
                  Slug
                </Typography>
                <TextField
                  id="Slug"
                  onChange={handleChangeSlugCategory}
                  name="Slug"
                  label="Slug"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} marginTop={2}>
                <Button
                  type="button"
                  onClick={handleAddCategory}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add category
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
