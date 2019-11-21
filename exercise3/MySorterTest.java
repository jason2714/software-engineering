package ntou.cs.sorter;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class MySorterTest {
	private double tc1[][] = { { 1.0 }, { 1.0 } };
	private double tc2[][] = { { 1.0, 1.1, 2.0, 2.1, 10.10, 100 }, { 1.0, 1.1, 2.0, 2.1, 10.10, 100 } };
	private double tc3[][] = { { 100, 10.10, 2.1, 2.0, 1.1, 1.0 }, { 1.0, 1.1, 2.0, 2.1, 10.10, 100 } };
	private double tc4[][] = { { 2.0, 2.1, 1.1, 10.10, 100, 1.0 }, { 1.0, 1.1, 2.0, 2.1, 10.10, 100 } };
	private double tc5[][] = { { 2, 4, 5, 1, 3 }, { 1, 2, 3, 4, 5 } };
	private double tc6[][] = { { 0, 1, -1 }, { 0, 1, -1 } };
	private double tc7[][] = { {}, {} };
	private double tc8[][] = { { 1.0000001, 0.9999999, 1 }, { 0.9999999, 1, 1.0000001 } };

	private MySorter sorter;

	@Before
	public void setUp() throws Exception {
		sorter = new MySorter();
	}

	@After
	public void tearDown() throws Exception {
		sorter = null;
	}

	private void assertDoubleArrayEquals(double[] expected, double[] actual) {
		assertEquals(expected.length, actual.length);
		for (int i = 0; i < expected.length; i++) {
			assertEquals(expected[i], actual[i], 0.0001);
		}
	}

	@Test
	public void testSort1() {
		double expected[] = tc1[1];
		double input[] = tc1[0];
		double actual[];
		System.out.println("Test Case 1: test set with single set");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort2() {
		double expected[] = tc2[1];
		double input[] = tc2[0];
		double actual[];
		System.out.println("Test Case 2: test set with incremental order");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort3() {
		double expected[] = tc3[1];
		double input[] = tc3[0];
		double actual[];
		System.out.println("Test Case 3: test set with decremental order");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort4() {
		double expected[] = tc4[1];
		double input[] = tc4[0];
		double actual[];
		System.out.println("Test Case 4: test set with random order");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort5() {
		double expected[] = tc5[1];
		double input[] = tc5[0];
		double actual[];
		System.out.println("Test Case 5: test set with integer number");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort6() {
		double expected[] = tc6[1];
		double input[] = tc6[0];
		double actual[];
		System.out.println("Test Case 6: test set with negative number");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort7() {
		double expected[] = tc7[1];
		double input[] = tc7[0];
		double actual[];
		System.out.println("Test Case 7: test set with empty set");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}

	@Test
	public void testSort8() {
		double expected[] = tc8[1];
		double input[] = tc8[0];
		double actual[];
		System.out.println("Test Case 8: test set with accurate number");
		actual = sorter.sort(input);
		assertDoubleArrayEquals(expected, actual);
	}
}
