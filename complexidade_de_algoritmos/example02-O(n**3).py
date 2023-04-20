def multiply_arrays(a1, a2, a3):
    interactions = 0
    result = []
    for n1 in a1:
        print(f"Array 1: {n1}")
        for n2 in a2:
            print(f"Array 2: {n2}")
            for n3 in a3:
                print(f"Array 3: {n3}")
                result.append(n1 * n2 * n3)
                interactions += 1

    print(f"{interactions} interações!")
    return result


array = [1, 2, 3, 4, 5]

multiply_arrays(array, array, array)
