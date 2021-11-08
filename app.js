var engine = startCopperLichtFromFile('3darea', 'copperlichtdata/app.ccbz', 
'Loading $PROGRESS$...<br/><br/><img style="max-width:50%" src="copperlichtdata/bayer.png" />', 'Error: This browser does not support WebGL (or it is disabled).<br/>See <a href=\"http://www.ambiera.com/copperlicht/browsersupport.html\">here</a> for details.', true, true, "#000000");

var cubeSceneNode = null;

// this is called when loading the 3d scene has finished
engine.OnLoadingComplete = function() 
{					
    var scene = engine.getScene();
    if (scene)
    {
        // // find the cube scene node
        // cubeSceneNode = scene.getSceneNodeFromName('cubeMesh1');
        
        // // also, force the 3d engine to update the scene every frame
        // scene.setRedrawMode(CL3D.Scene.REDRAW_EVERY_FRAME);
        
        // // additional, let the sphere constantly rotate
        // var sphereSceneNode = scene.getSceneNodeFromName('sphereMesh1');
        // if (sphereSceneNode)
        //     sphereSceneNode.addAnimator(new CL3D.AnimatorRotation(new CL3D.Vect3d(0, 1.6, 0.8)));
    }
}

document.onkeydown = function(event)
{
    var key = String.fromCharCode(event.keyCode);
    
    // // when pressed 'L', move the cube scene node a bit up
    // if (key == 'F' && cubeSceneNode)
    //     cubeSceneNode.Pos.Y += 5;
        
    // // when pressed 'G', move the cube scene node a bit down
    // if (key == 'G' && cubeSceneNode)
    //     cubeSceneNode.Pos.Y -= 5;
    
    // we need to call the key handler of the 3d engine as well, so that the user is
    // able to move the camera using the keys
    engine.handleKeyDown(event);
};
