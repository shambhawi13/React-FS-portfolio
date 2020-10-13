import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import fe from '../../Assets/Front-End-Development.jpg';
import node from '../../Assets/NodeJS.png';
import angular from '../../Assets/angular.png';
import reactProject from '../../Assets/react.png';
import mern from '../../Assets/mern.jpg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 60 + '%',
        height: 80 + '%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
    {
        img: fe,
        title: 'Front-end Vanilla JS/JQuery Projects',
        author: 'author',
    },
    {
        img: node,
        title: 'Node Projects',
        author: 'author',
    },
    {
        img: reactProject,
        title: 'React Projects',
        author: 'author',
    },
    {
        img: angular,
        title: 'Angular Projects',
        author: 'author',
    },
    {
        img: mern,
        title: 'MERN Projects',
        author: 'author',
    }
];

export default function TitlebarGridList() {
    const classes = useStyles();
    let history = useHistory();

    function handleClickInfo(title) {
        console.log(title + ' clicked !!!!');
        switch (title) {
            case 'Front-end Vanilla JS/JQuery Projects':
                history.push('/dashboard/front-end');
                break;
            case 'Node Projects':
                history.push('/dashboard/node');
                break;
            case 'React Projects':
                history.push('/dashboard/react');
                break;
            case 'Angular Projects':
                history.push('/dashboard/angular');
                break;
            case 'MERN Projects':
                history.push('/dashboard/mern');
                break;
            case 'Node Projects':
                history.push('/dashboard/node');
                break;
            default:
                break;
        }
    }

    return (
        <div className={classes.root}>
            
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <h1>Projects</h1>
                    <ListSubheader component="div">Click on <IconButton className={classes.darkicon}>
                                    <InfoIcon /></IconButton> below to see projects in detail</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={() => handleClickInfo(tile.title)}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
