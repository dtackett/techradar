/* globals define */
define(function() {

    function createItem(name, loc, movement) {
        return {
            "name":name, 
            "loc": loc,
            "movement":movement
        };
    }

    return {
        //This is the title for your window tab, and your Radar
        title : "Technology Radar",

        //This is the concentic circles that want on your radar
        rings : [
                       {'r':100,'name':'Adopt'}
                      ,{'r':200,'name':'Trial'}
                      ,{'r':300,'name':'Assess'}
                      ,{'r':400,'name':'Hold'}
                     // ,{'r':500,'name':'Possible Extra if you want it'}
                     ],

        //This is your raw data
        //
        // Key
        //
        // movement:
        //   t = moved
        //   c = stayed put
        //
        // blipSize: 
        //  intValue; This is optional, if you omit this property, then your blip will be size 70.
        //            This give you the ability to be able to indicate information by blip size too
        //
        // url:
        // StringValue : This is optional, If you add it then your blips will be clickable to some URL
        //
        // pc: polar coordinates
        //   r = distance away from origin ("radial coordinate")
        //     - Each level is 100 points away from origin
        //     t = angle of the point from origin ("angular coordinate")
        //     - 0 degrees is due east
        //
        // Coarse-grained quadrants
        // - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
        // - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
        // - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
        // - Programming Languages and Frameworks
        //
        // Rings:
        // - Adopt: blips you should be using now; proven and mature for use
        // - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
        // - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
        // - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
        //      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

        h : 1160,
        w : 1200,

        sections : [
            { "name": "Techniques",
                "left" : 45,
                "top" : 18,
                "color" : "#8FA227",
                // [Techniques] (90 - 180)
                "items" : [ 
                    // [Hold]
                    // [Assess]
                    createItem('Performance testing', 2.30, 't'),
                    createItem('Load testing', 2.80, 't'),
                    createItem('Integration Testing', 2.20, 't'),                    
                    // [Trial]
                    createItem('Self executable app containers', 1.20, 't'),                    
                    createItem('Continuous Delivery', 1.20, 't'),
                    createItem('Smoke Tests', 1.40, 't'),
                    createItem('Mobile Web Apps', 1.60, 't'),
                    // [Adopt]
                    createItem('System Testing', 0.90, 't'),
                    createItem('GitFlow', 0.70, 't'),
                    createItem('Unit Testing', 0.50, 't'),
                    createItem('TDD', 0.80, 't'),
                    createItem('Responsive Design', 0.50, 't'),
                    createItem('Continuous Integration', 0.70, 't'),
                    createItem('Version control systems', 0.25, 't'),
                    createItem('Health checks', 0.85, 't')
                ]
            },
            { "name": "Tools",
                "left": 1160-100+30,
                "top" : 18,
                "color" : "#587486",
                // [Tools] (0 - 90)
                "items" : [ 

                    // [Hold]
                    createItem('Ant', 3.40, 't'),
                    createItem('Zookeeper', 3.40, 't'),
                    createItem('ActiveMQ', 3.50, 't'),
                    createItem('Less', 3.50, 't'),
                    // [Assess]
                    createItem('etcd', 2.80, 't'),                    
                    createItem('leiningen', 2.50, 't'),
                    createItem('Gradle', 2.70, 't'),
                    createItem('RabbitMQ', 2.80, 't'),
                    // [Trial]
                    createItem('Collected', 1.80, 't'),
                    createItem('statsd', 1.70, 't'),
                    createItem('redis', 1.70, 't'),
                    createItem('Docker', 1.20, 't'),
                    createItem('graphite', 1.20, 't'),
                    createItem('MongoDB', 1.20, 't'),
                    // [Adopt]
                    createItem('Sass', 0.90, 't'),
                    createItem('Require.js', 0.60, 't'),
                    createItem('Bower', 0.85, 't'),
                    createItem('Grunt', 0.30, 't'),
                    createItem('Maven', 0.55, 't'),
                    createItem('Chef', 0.90, 't'),
                    createItem('Vagrant', 0.60, 't'),
                    createItem('GitHub', 0.40, 't'),
                    createItem('nagios', 0.80, 't'),
                    createItem('MySQL', 0.80, 't')                    
                ]
            },
            { "name": "Platforms",
                "left" :45,
                 "top" : (1200/2 + 18),
                "color" : "#DC6F1D",
                // [Platforms] (180 - 270)
                "items" : [

                    // [Hold]
                    createItem('OSGi', 3.50, 't'),
                    createItem('Sling', 3.80, 't'),
                    createItem('JBoss', 3.20, 't'),
                    createItem('Servicemix', 3.70, 't'),
                    createItem('J2EE', 3.50, 't'),
                    // [Assess]
                    createItem('Dropwizard', 2.80, 't'),
                    createItem('Drupal', 2.20, 't'),
                    createItem('Statamic', 2.20, 't'),
                    
                    // [Trial]
                    createItem('Grails', 1.30, 't'),
                    createItem('Totem', 1.20, 't'),
                    
                    createItem('Angular.js', 1.15, 't'),
                    // [Adopt]
                    createItem('Cadmium', 0.70, 't'),
                    createItem('Amazon AWS', 0.50, 't'),
                    createItem('Twitter Bootstrap', 0.60, 't'),

                ]
            },
            { "name": "Languages",
                "color" : "#B70062",
                "left"  : (1160-100+30),
                "top" :   (1200/2 + 18),
                // [Languages & Framework] (270 - 360)
                "items" : [ 

                    // [Hold]
                    createItem('Flash', 3.40, 't'),
                    createItem('Flex', 3.80, 't'),
                    createItem('Dart', 3.15, 't'),
                    // [Assess]
                    createItem('Ruby', 2.50, 't'),
                    createItem('Go', 2.80, 't'),
                    createItem('Clojure', 2.70, 't'),
                    // [Trial]
                    createItem('SVG', 1.70, 't'),
                    createItem('PHP', 1.20, 't'),
                    createItem('Groovy', 1.20, 't'),
                    createItem('Python', 1.40, 't'),
                    // [Adopt]                    
                    createItem('HTML 5', 0.45, 't'),
                    createItem('Docpad', 0.70, 't'),
                    createItem('Javascript', 0.70, 't'),
                    createItem('Node.js', 0.50, 't'),
                    createItem('Java', 0.25, 't'),
                    createItem('Objective C', 0.80, 't')

                ]
            }
        ]
    };
});