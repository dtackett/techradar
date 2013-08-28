define(['radar'], function(radar) {

  var holdA = {"name": "Hold A", "loc": 3.6, "movement": "c"};
  var holdB = {"name": "Hold B", "loc": 3.5, "movement": "c"};

  var assessA = {"name": "Assess A", "loc": 2.6, "movement": "c"};

  var adoptA = {"name": "Adopt A", "loc": 0.2, "movement": "c"};
  var adoptB = {"name": "Adopt B", "loc": 0.7, "movement": "c"};

  var standardArcs = [
             {'r':100,'name':'Adopt'}
            ,{'r':200,'name':'Trial'}
            ,{'r':300,'name':'Assess'}
            ,{'r':400,'name':'Hold'}
          ];

  var createQuadrant = function(name, color, items) {
    return {quandrant: name,
      color: color,
      items: items}
  }

  describe("Radar", function() {
    describe("Arc data", function() {
      it("Group same arcs data", function() {
        // create test data

        var testData = {
          radar_arcs : standardArcs,
          radar_data : [
            createQuadrant('Quad A', "", [holdA, holdB, assessA, adoptA, adoptB])
          ]};   

        // send through bucketing function

        var nestedData = radar.nestDataByArc(testData);

        var expectedData = [
          {
            key: "3",
            values: [
              holdA,
              holdB
            ]
          },
          {
            key: "2",
            values: [
              assessA
            ]
          }, {
            key: "0",
            values: [
              adoptA,
              adoptB
            ]
          }
        ]

        // TODO This is wrong. Only getting one quadrant out

        // assert data comes out in buckets appropriately
        expect(expectedData).to.eql(nestedData);
      });
    
      describe("Determine quadrant bounds", function() {
        it("Bounds with no data", function() {
          // create test data
          var testData = {
            radar_arcs: standardArcs,
            radar_data: [
            ]
          }

          // compute radii bounds
          var computedBounds = radar.computeBounds(testData);

          // assert location is correct
          expect(testData).to.eql(computedBounds);
        }); 

        it("Bounds with single quadrant", function() {
          // create test data
          var testData = {
            radar_arcs: standardArcs,
            radar_data: [
              createQuadrant('Single Quad', '', [holdA])
            ]
          }

          // compute radii bounds
          var computedBounds = radar.computeBounds(testData);

          // assert location is correct
          expect(true).to.eql(computedBounds);
        });         

        it("Bounds with multiple quadrants", function() {
          // create test data
          var testData = {
            radar_arcs: standardArcs,
            radar_data: [
              createQuadrant('Quad A', '', [holdA]),
              createQuadrant('Quad B', '', [holdA]),
              createQuadrant('Quad C', '', [holdA]),
              createQuadrant('Quad D', '', [holdA]),
              createQuadrant('Quad E', '', [holdA]),
              createQuadrant('Quad F', '', [holdA])
            ]
          }

          // compute radii bounds
          var computedBounds = radar.computeBounds(testData);

          // assert location is correct
          expect(true).to.eql(computedBounds);
        });         
      });      

      it("Convert arc location to radius", function() {
        // create test data
        // send through location conversion
        // assert location is correct
        expect(true).to.eql(false);
      });       

      it("Space points in same arc", function() {
        // create test data
        var nestedDataEntry = {
              key: "3",
              values: [
                holdA,
                holdB
              ]
            };

        // space points
        var spacedData = radar.spaceEntry(nestedDataEntry);

        // assert points are properly spaces
        expect(true).to.eql(false);
      });
    });    
  });
})
