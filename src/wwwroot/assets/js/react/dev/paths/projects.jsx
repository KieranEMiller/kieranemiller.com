import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  column_left: {
    flexBasis: '180px',
    marginBottom:'15px'
  },
  column_right: {
    flexBasis: '66.66%',
    marginBottom:'15px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    fontWeight: "bold"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  break:{
      flexBasis:"100%",
      height:"0",
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <div className={classes.column_left}><Typography className={classes.heading}>Key Commander</Typography></div>
            <div className={classes.column_right}>
                <Typography >Typing accuracy measurement and analysis</Typography> 
                <Typography className={classes.secondaryHeading}><a href="https://github.com/KieranEMiller/key-commander">https://github.com/KieranEMiller/key-commander</a></Typography>
            </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <div className={classes.container}>
                <div className={classes.column_left}><Typography className={classes.secondaryHeading}>Purpose</Typography></div>
                <div className={classes.column_right}>
                    <Typography>
                        An application to measure, analyze and improve typing speed and accuracy
                    </Typography>
                </div>
                <div className={classes.column_left}><Typography className={classes.secondaryHeading}>Development Status</Typography></div>
                <div className={classes.column_right}>
                    <Typography>
                        Active, not stable or production ready
                    </Typography>
                </div>
                <div className={classes.column_left}> <Typography className={classes.secondaryHeading}>URL</Typography> </div>
                <div className={classes.column_right}>
                    <Typography>
                        <a href="http://keycdr.com">http://keycdr.com</a>
                    </Typography>
                </div>
                <div className={classes.column_left}><Typography className={classes.secondaryHeading}>Technology</Typography></div>
                <div className={classes.column_right}>
                    <Typography>
                    <ul>
                        <li><u>Front End: Web:</u> React, ASP.NET MVC</li>
                        <li><u>Front End: Windows:</u> WPF</li>
                        <li><u>Back End: </u> MS SQL 2015</li>
                    </ul>
                    </Typography>
                </div>
                <div className={classes.column_left}> <Typography className={classes.secondaryHeading}>Justification</Typography> </div>
                <div className={classes.column_right}>
                    <Typography>
                    <ul>
                        <li>Technical interest and challenge</li>
                        <li>Portfolio building</li>
                    </ul>
                    </Typography>
                </div>
                <div className={classes.column_left}> <Typography className={classes.secondaryHeading}>Future Features</Typography> </div>
                <div className={classes.column_right}>
                    <Typography>
                    <ul>
                        <li><u>Adaptive learning</u>: learn what keys, key combinations, words and phrases a user has the most trouble with and present 
                            those characters or words more often.  Demonstrate or show visually to the user over time the change in performance or accuracy
                            for those troublesome keys.
                        </li>
                        <li><u>User provided content</u>: allow the user to upload their own sample data and source it when retrieving sample text</li>
                        <li><u>Improve the Analysis Window for Text</u>: make the error analysis or results window more interactive to help the user identify what 
                            they did wrong.  Currently characters are color coded but ideally this would be interactive
                        </li>
                        <li><u>Reply:</u> add the ability to reply the text as it was entered in real time</li>
                    </ul>
                    </Typography>
                </div>
            </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
            <div className={classes.column_left}><Typography className={classes.heading}>Backup Rsync</Typography></div>
            <div className={classes.column_right}>
                <Typography >Backup script and email tool</Typography> 
                <Typography className={classes.secondaryHeading}><a href="https://github.com/KieranEMiller/backup-rsync">https://github.com/KieranEMiller/backup-rsync</a></Typography>
            </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <div className={classes.container}>
                <div className={classes.column_left}><Typography className={classes.secondaryHeading}>Purpose</Typography></div>
                <div className={classes.column_right}>
                    <Typography>
                        A script that wraps the unix rsync utility (fantastic tool) to backup a subset of a file system and optionally email a result summary
                    </Typography>
                </div>
                <div className={classes.column_left}><Typography className={classes.secondaryHeading}>Development Status</Typography></div>
                <div className={classes.column_right}>
                    <Typography>
                        Stable, in production use
                    </Typography>
                </div>
                <div className={classes.column_left}> <Typography className={classes.secondaryHeading}>URL</Typography> </div>
                <div className={classes.column_right}>
                    <Typography>
                        N/A
                    </Typography>
                </div>
                <div className={classes.column_left}><Typography className={classes.secondaryHeading}>Technology</Typography></div>
                <div className={classes.column_right}>
                    <Typography>
                        BASH shell script
                    </Typography>
                </div>
                <div className={classes.column_left}> <Typography className={classes.secondaryHeading}>Justification</Typography> </div>
                <div className={classes.column_right}>
                    <Typography>
                    <ul>
                        <li>Practical use personnally and for family</li>
                        <li>BASH scripting practice</li>
                    </ul>
                    </Typography>
                </div>
                <div className={classes.column_left}> <Typography className={classes.secondaryHeading}>Future Features</Typography> </div>
                <div className={classes.column_right}>
                    <Typography>
                    <ul>
                        <li>No enhancements slated</li>
                    </ul>
                    </Typography>
                </div>
            </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

class Projects extends BaseComponent {
    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    <h2>Projects</h2>
                    <ControlledExpansionPanels />
                </div>
            </ContentContainer>
        );
    }
}

export default Projects;