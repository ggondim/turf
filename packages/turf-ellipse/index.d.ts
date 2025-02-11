import { Feature, Coord, Polygon, Units, Properties } from "@turf/helpers";

/**
 * http://turfjs.org/docs/#ellipse
 */
export default function (
  center: Coord,
  xSemiAxis: number,
  ySemiAxis: number,
  options?: {
    /** default 64 */
    steps?: number;
    /** default kilometers */
    units?: Units;
    properties?: Properties;
    /**
     * Angle of rotation in decimal degrees, positive clockwise
     * default 0
     */
    angle?: number;

    /**
     * point around which the rotation will be performed
     * default is the point specified by center
     */
    pivot?: Coord;
  }
): Feature<Polygon>;
